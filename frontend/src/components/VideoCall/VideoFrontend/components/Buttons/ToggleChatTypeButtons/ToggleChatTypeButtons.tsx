import Button from '@material-ui/core/Button';
import React from 'react';
import useChatContext from '../../../hooks/useChatContext/useChatContext';
import { ChatType } from '../../../types';


/**
 * Type to represent props for a chat type button
 */
type ToggleChatTypeButtonProps = {
  chatType: ChatType;
  unreadMessages: boolean;
  className?: string;
};

/**
 * 
 * @param props Contains a chat type enum, which determines which chat type this button should select
 * @returns A rendered chat type button
 */
export default function ToggleChatTypeButton(props: ToggleChatTypeButtonProps) {
  const { chatType, setChatType } = useChatContext();

  const toggleChatType = () => {
    setChatType(props.chatType);
  };

  return (
    <Button
      data-testid='chat-button'
      onClick={toggleChatType}
      disabled={props.chatType === chatType}
      className={props.className}
      style={{ display: 'relative' }}>
      {props.unreadMessages && (
        <div
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#7936e4',
            position: 'absolute',
            top: '5%',
            right: '5%',
            borderRadius: '20px',
          }}
        />
      )}
      {props.chatType.toString()}
    </Button>
  );
}
