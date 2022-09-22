import { render, screen } from '@testing-library/react';
import App from './App';

const testItems = [
  {
    "index": 0,
    "url": "https://qql.art/token/0xf519bc3fbc0b1ec8feec3bbb47cc564a6532123ae2d9255132f1ffff11010cb3",
    "name": "Sahara"
  },
  {
    "index": 1,
    "url": "https://img.qql.art/nonfinal/0xf519bc3fbc0b1ec8feec3bbb47cc564a6532123afa99f5117f58ffff000108b2.webp",
    "name": "Midas"
  },
  {
    "index": 2,
    "url": "https://img.qql.art/nonfinal/0xf519bc3fbc0b1ec8feec3bbb47cc564a6532123afd088d24dea1ffff000108b3.webp",
    "name": "The Dress"
  },
  {
    "index": 3,
    "url": "https://img.qql.art/nonfinal/0xde11a3ff6a58abfd2d807a5b9bb4267ceae25aa59f32da2a4ecaffff101108c5.webp",
    "name": "Ratio"
  },
  {
    "index": 4,
    "url": "https://img.qql.art/nonfinal/0xde11a3ff6a58abfd2d807a5b9bb4267ceae25aa5d86550cc3210ffff1499d155.webp",
    "name": "Olympia"
  },
  {
    "index": 5,
    "url": "https://img.qql.art/nonfinal/0xde11a3ff6a58abfd2d807a5b9bb4267ceae25aa5cecd34556670ffff10d110c5.webp",
    "name": "Jordan"
  },
  {
    "index": 6,
    "url": "https://qql.art/token/0x34db35639eafe2712ae1f69dfa298b06a5c2505300cdf4b356acffff00811056",
    "name": "Antibodies"
  },
  {
    "index": 7,
    "url": "https://qql.art/token/0x96d25ae41cc428c20320a72ed70a1c3427541dc5ed4d8b570a7bffff120108c7",
    "name": "Rainbow"
  },
  {
    "index": 8,
    "url": "https://img.qql.art/nonfinal/0x96d25ae41cc428c20320a72ed70a1c3427541dc50aa8550bf4dcffff12810947.webp",
    "name": "Pull"
  },
  {
    "index": 9,
    "url": "https://img.qql.art/nonfinal/0xf519bc3fbc0b1ec8feec3bbb47cc564a6532123ab2062bc0518bffff00c108b3.webp",
    "name": "Volcano"
  },
  {
    "index": 10,
    "url": "https://img.qql.art/nonfinal/0xf519bc3fbc0b1ec8feec3bbb47cc564a6532123af30dc7021cdbffff12e100b0.webp",
    "name": "Lemur"
  },
  {
    "index": 11,
    "url": "https://img.qql.art/nonfinal/0xf519bc3fbc0b1ec8feec3bbb47cc564a6532123a439b38107c2affff1151a52a.webp",
    "name": "Abacus"
  },
  {
    "index": 12
  }
];

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
