import { createContext, useReducer, type Dispatch } from "react";
import { Button } from "./components/Button";
import { Hero } from "./components/Hero";
import { Form } from "./components/Form";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schemas/formSchema";
import type { HeroAction, HeroContextType } from "./types";
import { reducer } from "./reducers";
import { ResultPage } from "./components/ResultPage";

const initialState: HeroContextType = {
  heroState: "initial",
  result: {
    transportation: 0,
    diet: 0,
    household: 0,
    total: 0,
    country: 0,
    global: 0,
    countryName: "Afghanistan",
  },
};

export const HeroContext = createContext<{
  state: HeroContextType;
  dispatch: Dispatch<HeroAction>;
}>({ state: initialState, dispatch: () => null });

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Hero>
      <HeroContext.Provider value={{ state, dispatch }}>
        {state.heroState === "initial" ? (
          <>
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Do you want to know how much CO2 you emit?</p>
            <Button
              type="button"
              variant="primary"
              label="Get Started"
              onClick={() => dispatch({ type: "SHOW_FORM" })}
            />
          </>
        ) : state.heroState === "form" ? (
          <FormProvider {...methods}>
            <Form />
          </FormProvider>
        ) : (
          <ResultPage result={state.result} />
        )}
      </HeroContext.Provider>
    </Hero>
  );
}

export default App;
