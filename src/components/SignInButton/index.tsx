import styles from './styles.module.scss';

import { signIn, useSession, signOut } from 'next-auth/client';
 
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
export function SignInButton() {
  const [session] = useSession();
  console.log(session);

  return session ? ( 
    <button className={styles.SignInButton} onClick={() => signOut()} type="button">
      <FaGithub color="#04d361" />
    {session.user.name}
    <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button className={styles.SignInButton} onClick={() => signIn('github')} type="button">
      <FaGithub color="#eda417" />
    Sigin in with Github
    </button>
  )
}