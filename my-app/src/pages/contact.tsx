import { ContactContent } from "@/feature/Contact";
import type { NextPage } from "next";
import { AppMain } from "@/common/components/Layout/Main";

const Contact: NextPage = () => {
  return (
    <>
      <AppMain
        title="けんやのポートフォリオ | コンタクトページ"
        description="コンタクトページです"
      >
        <ContactContent />
      </AppMain>
    </>
  );
};

export default Contact;
