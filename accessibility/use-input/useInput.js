import uuid from 'react-uuid';
import { useRef } from 'react';

/**
 * 
 * @param {Object} props
 * @param {boolean} props.withDescription
 * @param {boolean} props.withLabel 
 */
function useInput({
  withDescription,
  withLabel,
}) {
  const inputId = useRef(uuid());
  const labelId = useRef(uuid());
  const descId = useRef(uuid());
  let result = {
    input: {
      id: inputId.current,
    },
  };

  if (withLabel) {
    result = {
      ...result,
      input: {
        ...result.input,
        'aria-labelledby': labelId.current,
      },
      label: {
        id: labelId.current,
        htmlFor: inputId.current,
      },
    }
  }

  if (withDescription) {
    result = {
      ...result,
      input: {
        ...result.input,
        'aria-describedby': descId.current,
      },
      desc: {
        id: descId.current,
      },
    };
  }

  return result;
}

export default useInput;
