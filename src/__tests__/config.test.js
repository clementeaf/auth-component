import { style, initialValues, forgotPasswordLinkMessage, axiosInstance } from "../../config"
import axiosMock from 'axios-mock-adapter';

const mock = new axiosMock(axiosInstance);

describe('Configuration Tests', () => {

    beforeAll(() => {
        mock.onAny().reply(200, {});
      });

    test('Style Configuration', () => {
      expect(style).toEqual({
        initialPosition: "translate-y-[30px] translate-x-[10px] text-black/70 ease-in-out duration-500",
        noPosition: "ease-in-out duration-500",
      });
    });
  
    test('Initial Form Values', () => {
      expect(initialValues).toEqual({
        user: "",
        password: "",
      });
    });
  
    test('Forgot Password Message', () => {
      expect(forgotPasswordLinkMessage).toBe("Forgot your password? Retrieve here");
    });
  });