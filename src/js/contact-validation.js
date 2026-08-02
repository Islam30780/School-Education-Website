import JustValidate from "just-validate";

export function ContactValidation(){
    const contactForm = document.querySelector("#contact-form");
    if(!contactForm) return;
    const validation = new JustValidate("#contact-form");
    
    validation
    .addField("#parent-name", [
      {
        rule: "required",
        errorMessage: "Parent name is required",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Name must be at least 3 characters",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Email is required",
      },
      {
        rule: "email",
        errorMessage: "Email is not valid",
      },
    ])
    .addField("#phone", [
      {
        rule: "required",
        errorMessage: "Phone number is required",
      },
    ])
    .addField("#message", [
      {
        rule: "required",
        errorMessage: "Message is required",
      },
      {
        rule: "minLength",
        value: 10,
        errorMessage: "Message must be at least 10 characters",
      },
    ])
    .onSuccess((event) => {
      event.preventDefault();
      alert("Form submitted successfully");
      contactForm.reset();
    });
}
