import React from 'react';
import styled from 'styled-components';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const StyledWrapper = styled.div<{ $bgColor: string; $textColor: string }>`
  display: inline-block;

  .btn {
    position: relative;
    font-size: 14px;
    text-decoration: none;
    padding: 0.6em 1.4em;
    display: inline-block;
    cursor: pointer;
    border-radius: 6em;
    transition: all 0.2s;
    border: none;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    color: ${({ $textColor }) => $textColor};
    background-color: ${({ $bgColor }) => $bgColor};
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-color: ${({ $bgColor }) => $bgColor};
  }

  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;

export function AnimatedButton({
  children,
  bgColor = '#e2e8f0',
  textColor = '#4a5568',
  className,
  ...props
}: AnimatedButtonProps) {
  return (
    <StyledWrapper $bgColor={bgColor} $textColor={textColor}>
      <button className={`btn ${className ?? ''}`} {...props}>
        {children}
      </button>
    </StyledWrapper>
  );
}
