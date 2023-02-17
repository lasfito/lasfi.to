import React from "react";

interface NewsLetterProps {
  cta: string;
}

const Newsletter = ({cta}: NewsLetterProps) => {
  return (
    <div className="newsletter">
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <form
        action="https://app.convertkit.com/forms/2453675/subscriptions"
        className="seva-form formkit-form"
        method="post"
        data-sv-form="2453675"
        data-uid="6f18a27d03"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Revisa tu correo para confirmar la suscribción.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div className="formkit-background"></div>
        <div data-style="minimal">
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          <div
            data-element="fields"
            data-stacked="true"
            className="seva-fields formkit-fields"
          >
            <div className="formkit-field app-form-group">
              <input
                // className="formkit-input"
                className="app-form-control"
                name="email_address"
                aria-label="Correo electrónico"
                placeholder="tucorreo@ejemplo.com"
                required={true}
                type="email"
                id="correoNewsletter"
              />
            </div>
            <div className="centrar">
              <button
                data-element="submit"
                className="my-1 mx-[10px] h-[3rem] w-[15rem] cursor-pointer rounded-md bg-boton text-2xl text-lg text-white outline-none transition duration-300 ease-out hover:translate-y-[15%] hover:bg-hover hover:bg-hover "
              >
                <div className="formkit-spinner ">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span className="">{cta}</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
