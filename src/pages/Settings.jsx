import { GridItem, SimpleGrid } from "@chakra-ui/react";
import UpdateForm from "../componants/settingPag/UpdateForm";
import MainLayout from "../componants/MainLayout";
import UpdateView from "../componants/settingPag/UpdateView";
import ProtectRoute from "../componants/routes/ProtectRoute";

export default function Settings() {

  return (
    <MainLayout>
      <ProtectRoute>
        <SimpleGrid columns={{ lg: 3, base: 1 }} columnGap='3vw' mt={{ lg: '-8vw', base: '-10vw' }} px='4vw'>
          <GridItem colSpan={2}>
            <UpdateForm />
          </GridItem>
          <GridItem colSpan={1}>
            <UpdateView editMode={true} />
          </GridItem>
        </SimpleGrid>
      </ProtectRoute>
    </MainLayout >
  )
}
