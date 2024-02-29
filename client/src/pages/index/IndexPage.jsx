import React from 'react';
import ParticalCanvas from '../../components/canvas/ParticalCanvas';

function IndexPage() {
  return (
    <div className='grid h-dvh w-full overflow-hidden'>
      <div>
        <article>
          <div>
            <h1>
              <strong>QUEEN B</strong>
            </h1>
          </div>
          <div>
            <h2>
              The beautiful and divine Queen B{' '}
              <span className='italic'>welcomes</span> you!
            </h2>
          </div>
          <div>
            <h3>
              A lustful and sensuously kinky Mistress who's very presence
              commands your devotion.
            </h3>
          </div>
          <div>
            Kneel, worship and delight in sinful pleasure with Queen B, remember
            her rules and remember your manors.
          </div>
          <div>Offering the strictest service with the highest pleasure.</div>

          <section>
            {/* Same font at Queen B */}
            <div>
              <button>Enter</button>
            </div>
          </section>
        </article>

        <section>
            <ParticalCanvas />
        </section>
      </div>
    </div>
  );
}

export default IndexPage;
