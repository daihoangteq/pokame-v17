import { getApi } from "@src/utils/api";

export const actionFormPoke = () => {
  const inputName = "inputValue";
  const pokeName = "pokeName"
  const actionName = async (
    _: string,
    formData: FormData
  ): Promise<"SUCCESS" | "FAIL"> => {
    const inputValue = (formData.get(inputName) as string) || "";
    const pokeNameValue = (formData.get(pokeName) as string) || "";

    try {
      const response = await getApi(`/${pokeNameValue}`);
      if (!response || !response.types) {
        return "FAIL";
      }
      const isMatchType = !!response.types.find(
        (item: { type: { name: string } }) => item?.type?.name === inputValue
      );
      return isMatchType ? "SUCCESS" : "FAIL";
    } catch (e) {
      console.log(e);
      return "FAIL";
    }
  };
  return {
    inputName,
    pokeName,
    actionName,
  };
};
