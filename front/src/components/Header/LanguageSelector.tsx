import { IoLanguage } from "react-icons/io5";
import { AVAILABLE_LANGS } from "../../consts";

function LanguageSelector() {
  const handleLanguageChange = (newLocale: string) => {
    if (typeof window === 'undefined') return;
    const currPath = window.location.pathname;
    const newPath = currPath.replace(/^\/(en|es|pt|fr|ru|jp|it)/, `/${newLocale}`);
    window.location.href = newPath;
  };

  // Get current locale from path
  const currentLocale =  typeof window === 'undefined'  ? "en" : window?.location.pathname.split('/')[1] || 'en';

  console.log("language selector loaded")

  return (
    <div className="relative inline-block text-left cursor-pointer"> 
      <select
      defaultValue={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="appearance-none rounded cursor-pointer border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight focus:border-primario focus:outline-none dark:bg-fondo-jr dark:text-texto-str"
      >
        {AVAILABLE_LANGS.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
        </select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <IoLanguage className="text-gray-500" />
        </div> 
    </div>
);
}

export default LanguageSelector;