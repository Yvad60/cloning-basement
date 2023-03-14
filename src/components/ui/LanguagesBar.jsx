import { Fragment } from "react";
import CenterContent from "../layout/CenterContent";

export default function LanguagesBar() {
  const languages = ["English", "Frangais", "PyccKYIV1", "Espaöol", "Deutsc"];
  return (
    <section>
      <CenterContent>
        <div className="flex justify-center">
          {languages.map((language, key) => (
            <Fragment key={index}>
              <span>{language}</span>
              <span>.</span>
            </Fragment>
          ))}
        </div>
      </CenterContent>
    </section>
  );
}
