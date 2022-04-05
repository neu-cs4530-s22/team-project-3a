import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Select } from '@chakra-ui/react';
import usePlayersInTown from '../../../../../../hooks/usePlayersInTown';
import useChatContext from '../../../hooks/useChatContext/useChatContext';
import useUserProfile from '../../../../../../hooks/useUserProfile';
import useCoveyAppState from '../../../../../../hooks/useCoveyAppState';
import AppStateProvider from '../../../state';

export type ChatPlayerDropdownProps = {
    currentPlayerID: string,
    setPlayerID: (currentPlayerID: string) => void
}


export default function ChatPlayerDropdown(props: ChatPlayerDropdownProps) {
    const players = usePlayersInTown();
    const {currentPlayerID, setPlayerID} = props;
    const currentPlayerName = players.find(player => player.id === currentPlayerID)?.userName
    const appstate = useCoveyAppState();

    const changeHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setPlayerID(event.currentTarget.value);
    }

    return <Select onChange={changeHandler} placeholder={currentPlayerID === '' ? 'Select Player' : currentPlayerName}>
            {players.map(player => (player.id !== currentPlayerID && player.id !== appstate.myPlayerID) && <option key={player.id} value={player.id}>{player.userName}</option>)}
            </Select>
}