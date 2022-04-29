import { GetServerSidePropsContext, NextPage } from 'next'

const User: NextPage = () => {
  return <div>User</div>
}

export default User

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = String(context.query.user)
  if (!user.startsWith('@')) {
    return {
      notFound: true
    }
  }
  return {
    props: {}
  }
}
