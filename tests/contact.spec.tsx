import React from 'react'
import { render, screen } from '@testing-library/react';
import { RockCanCodeMembersInfo } from "@/src/constants/socials";
import Contact from '@/app/contact/page';

describe('Contact Component', () => {
  it('should render the contact container', () => {
    render(<Contact />);
    const contactContainer = screen.getByTestId('contact-container');
    expect(contactContainer).toBeInTheDocument();
  });

  it('should render the correct number of cards', () => {
    render(<Contact />);
    const cards = screen.getAllByRole('card');
    expect(cards.length).toBe(RockCanCodeMembersInfo.length);
  });

  it('should display member names', () => {
    render(<Contact />);
    RockCanCodeMembersInfo.forEach(member => {
      expect(screen.getByText(member.name)).toBeInTheDocument();
    });
  });
});