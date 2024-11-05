import { Section, Text, Button } from '@react-email/components';
import * as React from 'react';
import { button, content, paragraph } from '../css/styles';
import { MailBody } from '../partials/partials';
interface Props {
  inviteLink: string;
}
// import { useTranslation } from 'next-i18next';

export const InvitationEmail = ({ inviteLink }: Props) => {
  return (
    <MailBody>
      <Section style={content}>
        <Text style={paragraph}>你好,</Text>
        <Text style={paragraph}>邀请你使用知识库应用.</Text>
        <Text style={paragraph}>
          请点击下方的接受按钮,注册知识库并使用
        </Text>
      </Section>
      <Section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '15px',
          paddingBottom: '15px',
        }}
      >
        <Button href={inviteLink} style={button}>
          接受邀请
        </Button>
      </Section>
    </MailBody>
  );
};
// export const InvitationEmail = ({ inviteLink }: Props) => {
//   return (
//     <MailBody>
//       <Section style={content}>
//         <Text style={paragraph}>Hi there,</Text>
//         <Text style={paragraph}>You have been invited to Docmost.</Text>
//         <Text style={paragraph}>
//           Please click the button below to accept this invitation.
//         </Text>
//       </Section>
//       <Section
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           paddingLeft: '15px',
//           paddingBottom: '15px',
//         }}
//       >
//         <Button href={inviteLink} style={button}>
//           Accept Invite
//         </Button>
//       </Section>
//     </MailBody>
//   );
// };
export default InvitationEmail;
