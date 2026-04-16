import { PropsWithChildren } from "react";
import { Icons } from "./icons";

export const MockDiscordUI = ({ children }: PropsWithChildren) =>{
return <div className="flex min-h-[800px] w-full max-w-[1200px] overflow-hidden rounded-lg bg-discord-background text-white shadow-lg">
    <div className="hidden w-[72px] flex-col items-center bg-discord-brand-color p-3 sm:flex">
        <div className="grid size-12 place-items-center rounded-2xl bg-white/10 text-white">
            <Icons.discord className="size-6" />
        </div>
    </div>

    <div className="flex-1">{children}</div>
</div>
}