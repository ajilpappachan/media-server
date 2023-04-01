import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

export default () => {};

export const getServerSideProps = (
	context: GetServerSidePropsContext
): GetServerSidePropsResult<{}> => {
	return {
		redirect: {
			statusCode: 301,
			destination: "/folder/home",
		},
	};
};
