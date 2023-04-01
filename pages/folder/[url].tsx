import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import React from "react";
import getBackendAndRedirect from "../../src/utils/getBackendAndRedirect";
import axios from "axios";
import IFileData from "../../src/interfaces/common/IFileData";
import IFile from "../../src/interfaces/common/IFile";

interface FolderPageProps {
	url: string;
	files: IFile[];
}

const FolderPage = ({ url, files }: FolderPageProps) => {
	console.log(files);
	return <div>{`${url}-${files}`}</div>;
};

export const getServerSideProps = async (
	context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<FolderPageProps>> => {
	const serverDownRedirect = await getBackendAndRedirect(context.resolvedUrl);
	if (serverDownRedirect) return { redirect: serverDownRedirect };

	const { url } = context.params;
	const response = (
		await axios.get<IFileData>(process.env.BACKEND_URL + "/folder/" + url)
	).data;
	return {
		props: {
			url: response.url,
			files: response.files,
		},
	};
};

export default FolderPage;
