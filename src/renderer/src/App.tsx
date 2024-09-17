import { Content, DraggableTopBar, NotePreviewList, RootLayout, Sidebar } from './components'
import { ActionButtonsRow } from './components/ActionButtonsRow'

const App = (): JSX.Element => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className={'flex justify-between mt-1'} />
          <NotePreviewList className={'mt-3 space-y-1'} />
        </Sidebar>
        <Content className={'border-1'}>Content</Content>
      </RootLayout>
    </>
  )
}

export default App
