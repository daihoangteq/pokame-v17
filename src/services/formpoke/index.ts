import { getApi } from "@src/utils/api";

export const actionFormPoke = () => {
  const inputName = "pokeName";
  const actionName = async (
    _: string,
    formData: FormData
  ): Promise<"SUCCESS" | "FAIL"> => {
    const itemName = (formData.get(inputName) as string) || "";
    try {
      const response = await getApi(`/${itemName}`);
      if (response) {
        return "SUCCESS";
      }
    } catch (e) {
      console.log(e);
      return "FAIL";
    }
    return "FAIL";
  };
  return {
    inputName,
    actionName,
  };
};
