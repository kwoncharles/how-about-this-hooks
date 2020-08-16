import uuid from 'react-uuid';

function useInput({
  withLabel,
  withDescription,
}) {
  const inputId = uuid();

  let result = {
    inputProps: {
      id: inputId,
    },
  };

  if (withLabel) {
    const labelId = uuid();
    result = {
      ...result,
      inputProps: {
        ...result.inputProps,
        'aria-labelledby': labelId,
      },
      labelProps: {
        id: labelId,
        htmlFor: inputId,
      },
    }
  }

  if (withDescription) {
    const descId = uuid();
    result = {
      ...result,
      inputProps: {
        ...result.inputProps,
        'aria-describedby': descId,
      },
      descProps: {
        id: descId,
      },
    }
  }

  return result;
}

export default useInput;
