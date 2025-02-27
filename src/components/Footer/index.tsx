import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'iSee: Building the AI you trust - v1.019 May 16';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
    // links={[
    //   {
    //     key: 'Ant Design Pro',
    //     title: 'Ant Design Pro',
    //     href: 'https://pro.ant.design',
    //     blankTarget: true,
    //   },
    //   {
    //     key: 'github',
    //     title: <GithubOutlined />,
    //     href: 'https://github.com/ant-design/ant-design-pro',
    //     blankTarget: true,
    //   },
    //   {
    //     key: 'Ant Design',
    //     title: 'Ant Design',
    //     href: 'https://ant.design',
    //     blankTarget: true,
    //   },
    // ]}
    />
  );
};

export default Footer;
