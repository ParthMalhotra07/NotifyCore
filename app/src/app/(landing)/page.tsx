import { Heading } from "../../components/headings"
import { MaxWidthWrapper } from "../../components/max-width-wrapper"
import { Check } from "lucide-react"
import { ShinyButton } from "../../components/ShinyButton"
const page=()=>{
  return <>
  <section className="relative py-24 sm:py-32 bg-brand-25">
    <MaxWidthWrapper className="text-center">
    <div className="relative mx-auto text-center flex flex-col items-center gap-10">
      <div>
        <Heading>
          <span>Real-Time SaaS Insights,</span>
          <br />
          <span className="text-lg font-semibold relative bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Delivered to your Discord
          </span>
        </Heading>
      </div>
      <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
        PingPanda is the easiest way to monitor your SaaS. Get 
        instant 
        notifications for{" "}
        <span className="font-semibold text-gray-700">sales, new 
        users, or any other event</span>{" "} sent directly to 
        your Discord.
      </p>
      <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-center
      sm:items-start ">{
        ["Real-time Discord alerts for critical events",
          "Buy once and get lifetime access to all features and updates",
          "Track unlimited SaaS and get insights on your growth"
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="size-5 text-green-500"/>
            {item}
          </li>
        ))}
      </ul>
      <div className="w-full max-w-80">
        <ShinyButton
        href="/signup"
        className="w-full">Start for free today</ShinyButton>
      </div>
    </div>
    </MaxWidthWrapper>
  </section>
  <section></section>
  <section></section>
  <section></section>
  </>
}

export default page