import React, { useState, useCallback, Suspense } from 'react';
import { Form, Input, Select, Button, Card } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import type { Question, Questionnaire } from '@/models/questionnaire';
import DATA_FILEDS from '@/models/common';
const { Option } = Select;

const QuestionnaireEditor = React.lazy(
  () => import('@/components/iSee/question/toolkit/QuestionnaireEditor'),
);

const CreateQuestionnaire: React.FC<{ questionnaire: Questionnaire }> = (props) => {
  const withId =
    props.questionnaire.questions &&
    props.questionnaire.questions.map((question: Question) => ({
      ...question,
      id: `q-${uuidv4()}`,
    })); // generate an id for each question to update [hardcode les id]
  const [questionnaire, setQuestionnaire] = useState({ ...props.questionnaire, questions: withId });
  const [questions, setQuestions] = useState(withId);
  const [form, setForm] = useState(props.questionnaire);

  const handleQuestionnaireChange = useCallback(
    (updatedQuestions) => {
      setQuestions(updatedQuestions);
    },
    [setQuestions],
  );

  const handleFormChange = (values: any) => {
    setForm({ ...form, ...values });
  };

  const handleSubmit = () => {
    setQuestionnaire({ ...form, questions });
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        onValuesChange={handleFormChange}
        wrapperCol={{ span: 16 }}
        initialValues={questionnaire}
      >
        <Form.Item
          label="Questionnaire Name"
          name="name"
          rules={[{ required: true, message: 'Input is required!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Questionnaire Category"
          name="category"
          tooltip="This is a required field"
          rules={[{ required: true, message: 'Input is required!' }]}
        >
          <Select>
            {DATA_FILEDS.QUESTION_CATEGORY.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
      <Card size="small" title={'Questions'}>
        <Suspense fallback={<div>Loading...</div>}>
          <QuestionnaireEditor
            defaultQuestions={questionnaire.questions}
            onChange={handleQuestionnaireChange}
            noCategory
          />
        </Suspense>
      </Card>
      <Button type="primary" block onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default CreateQuestionnaire;
