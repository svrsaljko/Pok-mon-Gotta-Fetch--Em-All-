export const seconds = distance => Math.floor((distance % (1000 * 60)) / 1000);

export const minutes = distance =>
  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
export const hours = distance =>
  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
export const days = distance => Math.floor(distance / (1000 * 60 * 60 * 24));
