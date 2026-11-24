import type {TrackId} from './tracks';

// What a learner should be able to do at the end of each track. Text in `backticks` renders as code.
export const CHECKPOINTS: Record<TrackId, string[]> = {
  "beginner": [
    "I can explain authentication vs authorization, and what a token's `scope` and `aud` say",
    "ThunderID runs on my laptop and I know which console manages what",
    "I've created a user type and a user, and know why the password never comes back from the API",
    "I've signed a user in to a React app and decoded the ID token",
    "I can read a flow's JSON and find its prompt and task nodes",
    "I've given an agent its own token and found `sub_type` in it"
  ],
  "intermediate": [
    "I can trace how a role's permission ends up in an access token",
    "I've built a journey beyond sign-in, such as registration or recovery",
    "I've added a social sign-in or a notification step to a flow",
    "I've signed a user in through redirect, app-native and the Direct API, and compared what came back",
    "I can explain what an organization unit owns and how sharing works",
    "I can read an `act` claim and say who acted for whom"
  ],
  "advanced": [
    "I can explain how a B2B product keeps each customer company apart",
    "Given a spec, I can tell whether ThunderID supports it and where it's configured",
    "I've exported configuration as YAML and imported it back",
    "I can follow a change from the Control Plane Console to a data plane"
  ],
  "contributor": [
    "I can run ThunderID from source and hit a breakpoint in the flow engine",
    "I know which provider an executor uses to write a user or an agent",
    "I've run `make pr_checks` and know the path from an issue to a merged PR"
  ]
};
