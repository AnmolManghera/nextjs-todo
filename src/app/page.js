import { ClerkProvider ,SignedIn,SignedOut} from '@clerk/nextjs'
import Notes from './notes/page';

export default function Home() {
  return (
    <ClerkProvider>
      <SignedIn>
        <Notes/>
      </SignedIn>
      <SignedOut>
        <div>You need to sign in to access your notes</div>
      </SignedOut>
    </ClerkProvider>
  );
}
