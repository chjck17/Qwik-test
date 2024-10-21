import { component$ } from '@builder.io/qwik';

export const Faq = component$(() => {
  return (
    <section class="home-faq-section faq-section">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4">
            <h2>Frequently Asked Question</h2>
            <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorperi.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptatibus, tempora odio dicta molestiae recusandae delectus perferendis eveniet aspernatur voluptatum earum dolore necessitatibus odit perspiciatis eos, quidem soluta autem esse.
            </p>
          </div>
          <div class="col-lg-7">
            <dl class="accordion">
              <dt>
                <a href="#" class="active">Started several mistake joy say painful removed reached end.</a>
              </dt>
              <dd>
                Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.
              </dd>
              <dt>
                <a href="#">Although moreover mistaken kindness me feelings do be marianne?</a>
              </dt>
              <dd>
                Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.
              </dd>
              <dt>
                <a href="#">By in no ecstatic wondered disposal my speaking?</a>
              </dt>
              <dd>
                Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
});
