export const rescale = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
) => ((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;
