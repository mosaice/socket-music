
export default (value) => {
  const seconds = value.toFixed();
  const { floor, ceil } = Math;

  const hour = floor(seconds / (60 * 60));
  let minutes = floor(seconds % (60 * 60) / 60);
  let restSeconds = ceil(seconds % (60 * 60) % 60);

  if (minutes < 10) minutes = `0${minutes}`;
  if (restSeconds < 10) restSeconds = `0${restSeconds}`;

  return hour ? `${hour}:${minutes}:${restSeconds}` : `${minutes}:${restSeconds}`;
};
