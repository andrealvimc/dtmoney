import { useState } from 'react';
import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button onClick={onOpenNewTransactionModal} type="button">Nova transação</button>
      </Content>
    </Container>
  );
}