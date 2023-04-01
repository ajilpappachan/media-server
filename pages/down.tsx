import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Link from "next/link";
import React from "react";

interface DownProps {
	retryUrl: string;
}

const Down = ({ retryUrl }: DownProps) => {
	return (
		<div>
			<h1>Server is currently down</h1>
			<Link href={retryUrl}>
				<button>Retry</button>
			</Link>
		</div>
	);
};

export const getServerSideProps = (
	context: GetServerSidePropsContext
): GetServerSidePropsResult<DownProps> => {
	const { retry } = context.query;
	const retryUrl = retry ? (typeof retry === "string" ? retry : retry[0]) : "/";
	return {
		props: {
			retryUrl,
		},
	};
};

export default Down;
