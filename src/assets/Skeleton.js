import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
	<ContentLoader
		speed={2}
		width={436}
		height={952}
		viewBox='0 0 436 952'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='29' y='89' rx='11' ry='11' width='277' height='44' />
		<rect x='29' y='154' rx='11' ry='11' width='91' height='18' />
		<rect x='75' y='221' rx='11' ry='11' width='100' height='100' />
		<rect x='225' y='222' rx='11' ry='11' width='65' height='65' />
		<rect x='226' y='302' rx='11' ry='11' width='91' height='18' />
		<rect x='16' y='377' rx='11' ry='11' width='400' height='75' />
		<rect x='325' y='668' rx='11' ry='11' width='91' height='18' />
		<rect x='12' y='747' rx='11' ry='11' width='60' height='120' />
		<rect x='97' y='747' rx='11' ry='11' width='60' height='120' />
		<rect x='188' y='747' rx='11' ry='11' width='60' height='120' />
		<rect x='275' y='746' rx='11' ry='11' width='60' height='120' />
		<rect x='354' y='746' rx='11' ry='11' width='60' height='120' />
		<rect x='3' y='705' rx='11' ry='11' width='416' height='18' />
		<rect x='17' y='470' rx='11' ry='11' width='400' height='75' />
		<rect x='16' y='562' rx='11' ry='11' width='400' height='75' />
	</ContentLoader>
);

export default Skeleton;
