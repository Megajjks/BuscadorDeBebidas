import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from  "./Header"


describe('Header test', () => {
  render(<Header/>)

  test('Header render title correctly', () => {
    expect(screen.getByText('Busca recetas de bebidas')).toBeInTheDocument();
  });

  /* test('Header render is correctly', () => {
    const headerComponent = screen.getByTestId('header-main')
    expect(headerComponent).toBeInTheDocument();
  }); */

  /* test('Header background is red', () => {
    const BackgroundHeader = screen.getByRole('header');
    expect(BackgroundHeader).toHaveStyle({backgroundColor:"#ec3a49"})
  }) */

});
