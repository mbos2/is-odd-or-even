import { IResponse } from "./types";

const isNumber = (num: any): boolean => { 
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
}

const isOddOrEven = async (num: number): Promise<IResponse> => {
  const n = Math.abs(num);
  if (!isNumber(n)) {
     return {
      ok: false,
      statusCode: 500,
      message: 'Value given is not a number'
     }
  }
  if (!Number.isInteger(n)) {
    return {
      ok: false,
      statusCode: 500,
      message: 'Value given is not an integer'
     }
  }
  if (!Number.isSafeInteger(n)) {
    return {
      ok: false,
      statusCode: 500,
      message: 'Value exceeds safe integer range'
     }
  }
  if (n % 2 === 1) {
    return {
      ok: true,
      statusCode: 200,
      message: 'Number is odd'
     }
  } else {
    return {
      ok: true,
      statusCode: 200,
      message: 'Number is even'
     }
  }
}

const isOddOrEvenWrapper = async (num: number, log: any, error: any): Promise<IResponse> => { 
  try {
    log("Going into isOddOrEven . . .")
    const result = await isOddOrEven(num);
    log("Result from isOddOrEven . . .")
    log(result)
    log('Returning . . .')
    return result;
  } catch (err: any) {
    error("Error in isOddOrEvenWrapper . . .")
    error(err)
    return {
      ok: false,
      statusCode: 500,
      message: err.message as string
    }
  }
}

export default isOddOrEvenWrapper;