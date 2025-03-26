module.exports = {
    routes: [
        {
            method: "POST",
            handler: "api::contact-form.contact-form.sendForm",
            path: "/contact"
        },
        {
          method: "POST",
          handler: "api::contact-form.contact-form.sendResult",
          path: "/sendResult"
      },

    ]
}
