import React from "react";
import AddToSlackButton from "../../components/AddToSlackButton";
import ImageAssets from "../../assets/images";

export default function Home() {
  return (
    <div>
      <div className="m-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-2/5">
            <header>
              <h1 className="text-5xl font-semibold">
                Build cheerful teams in Slack!
              </h1>

              <div className="text-2xl text-gray-600 mt-2">
                Celebrate wins big and small. Employee recognition, celebrations
                and rewards in one easy-to-use platform.
              </div>
            </header>

            <div className="mt-8">
              <AddToSlackButton type="dark" />
            </div>
          </div>

          <figure className="w-3/5">
            <img
              src={ImageAssets.Illustration_1}
              alt="Whom do you want to say cheers to?"
              width="100%"
              height="100%"
            />
          </figure>
        </div>

        <div id="product" className="flex justify-between items-center mt-10">
          <figure className="w-3/5">
            <img
              src={ImageAssets.Illustration_3}
              alt="Get a sneak peak of your team's mood in the home tab of Cheersly"
              width="100%"
              height="100%"
            />
          </figure>

          <section className="flex flex-col w-2/5">
            <h2 className="text-2xl font-semibold">
              Boost your team&apos;s morale
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Cheersly allows users to quickly post &quot;cheers&quot; to a team
              member in acknowledgement of performance. Peer team members give
              each other &quot;cheers&quot; for work, teams gain real-time data
              on performance based on appreciation, and everyone begins to
              thrive a little more.
            </p>
          </section>
        </div>

        <div className="flex justify-between items-center mt-10">
          <section className="flex flex-col w-2/5">
            <h2 className="text-2xl font-semibold">Company values</h2>
            <p className="text-lg text-gray-600 mt-2">
              Support your company&apos;s vision and shape its culture by
              defining company values.
            </p>
          </section>

          <figure className="w-3/5">
            {/* eslint-disable-next-line */}
            <img
              src={ImageAssets.Illustration_4}
              alt="Appreciate your team members and tag company values"
              width="100%"
              height="100%"
            />
          </figure>
        </div>

        <div className="flex justify-between items-center mt-10">
          <figure className="w-3/5">
            {/* eslint-disable-next-line */}
            <img
              src={ImageAssets.Illustration_5}
              alt="Reward your team"
              width="100%"
              height="100%"
            />
          </figure>

          <section className="flex flex-col w-2/5">
            <h2 className="text-2xl font-semibold">Rewards 💰</h2>
            <p className="text-lg text-gray-600 mt-2">
              Create real-life perks and reward your team.
            </p>
          </section>
        </div>

        <div id="use-cases" className="m-10">
          <section className="flex justify-center">
            <h2 className="flex justify-between items-start mt-20 mb-10 text-3xl font-semibold">
              Why use Cheersly?
            </h2>
          </section>

          <div className="flex justify-between items-start mt-8">
            <section className="w-2/5">
              <h3 className="text-xl font-semibold">Reward your team</h3>
              <p className="text-gray-600 mt-1">
                Deliver a fun, candid and social Recognition & Rewards
                experience for your employees. Create a robust recognition
                program. Delight employees with rewards & choice of redemption.
              </p>
            </section>

            <section className="w-2/5">
              <h3 className="text-xl font-semibold">
                Build a healthier work environment
              </h3>
              <p className="text-gray-600 mt-1">
                Cheersly provides the kind of positive experience or uplift that
                can increase people&apos;s morale, motivation, engagement and
                renew their commitment to their organization.
              </p>
            </section>
          </div>

          <div className="flex justify-between items-start mt-8">
            <section className="w-2/5">
              <h3 className="text-xl font-semibold">
                Improve your team’s communication
              </h3>
              <p className="text-gray-600 mt-1">
                Team building activities help to bridge gaps and build
                relationships.
              </p>
            </section>

            <section className="w-2/5">
              <h3 className="text-xl font-semibold">
                Build an awesome work culture
              </h3>
              <p className="text-gray-600 mt-1">
                Recognize when employees align with your company values to
                reinforce good behavior.
              </p>
            </section>
          </div>
        </div>

        <div className="flex flex-col items-center mt-40 mb-40">
          <h2 className="text-4xl font-semibold">
            Build an awesome team culture!
          </h2>

          <div className="mt-10">
            <AddToSlackButton type="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
