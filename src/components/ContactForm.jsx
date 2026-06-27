import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Send me a message
        </h2>
        <div className="isolate mt-6 -space-y-px bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Project type</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="Web Development" name="project" value="web" />
              <RadioInput label="UI/UX Design" name="project" value="design" />
              <RadioInput label="Mobile App" name="project" value="mobile" />
              <RadioInput label="Consulting" name="project" value="consulting" />
            </div>
          </div>
          <div className="border border-neutral-300 px-6 py-8">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget range</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="$1K – $5K" name="budget" value="1" />
              <RadioInput label="$5K – $10K" name="budget" value="5" />
              <RadioInput label="$10K – $25K" name="budget" value="10" />
              <RadioInput label="$25K+" name="budget" value="25" />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Send message
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
