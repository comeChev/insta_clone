import ButtonAuthProvider from "@/components/ButtonAuthProvider";
import { getServerSession } from "next-auth";
import { getProviders, signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default async function SignIn() {
  const session = await getServerSession();
  if (session) {
    return { redirect: { destination: "/" } };
  }
  const providers = await getProviders();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-x-7 mt-10 max-w-6xl mx-auto">
      <Image
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.buzzoid.co.nz%2Fwp-content%2Fuploads%2F2022%2F04%2Flikes_bali_1.png&f=1&nofb=1&ipt=b160fabdabcd5342c3a42936713df773f8a4b58a1b14fc2314f9b2020c8f35b1&ipo=images"
        height={400}
        width={400}
        alt="Loving Instagram"
        className="h-auto w-auto hidden object-cover rotate-6 md:inline-flex "
      />
      <div>
        <div className="flex flex-col justify-center items-center">
          <Image
            height={200}
            width={200}
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngplay.com%2Fwp-content%2Fuploads%2F1%2FInstagram-Logo-Transparent-Image.png&f=1&nofb=1&ipt=3f7b73f1f0153a1d43d5673c19bc2703a967302055cdebc5d2169cdc618fba2f&ipo=images"
            alt="Instagram Logo"
            className="w-32 object-cover"
          />
          <p className="text-sm italic my-10 text-gray-600">
            This app is created for learning purposes
          </p>

          {Object.values(providers).map((provider, index) => (
            <ButtonAuthProvider
              key={index}
              name={provider.name}
              id={provider.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
