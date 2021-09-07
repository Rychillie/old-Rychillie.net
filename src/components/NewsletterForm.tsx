/* eslint-disable @next/next/no-img-element */
import styles from "../styles/components/NewsletterForm.module.scss";

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form
          action="https://app.convertkit.com/forms/2584382/subscriptions"
          method="post"
          data-sv-form="2584382"
          data-uid="a7e28e1fc4"
          data-format="inline"
          data-version="5"
          data-options='{
          "settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
          min-width="400 500 600 700 800"
        >
          <div className={styles.content} data-style="clean">
            <ul data-element="errors" data-group="alert"></ul>
            <div
              className={styles.submit}
              data-element="fields"
              data-stacked="false"
            >
              <input
                aria-label="Nome"
                name="fields[first_name]"
                required
                placeholder="Nome"
                type="text"
              />
              <input
                name="email_address"
                aria-label="Email"
                placeholder="Email"
                required
                type="email"
              />
              <button data-element="submit">
                <span>Cadastrar</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
