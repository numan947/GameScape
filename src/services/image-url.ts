// This component no longer works, as the API has been updated and it no longer supports the crop function.
const getCroppedImageUrl = (url:string)=>{
	const target = 'media/';
	const index = url.indexOf(target) + target.length;
	if (index === -1)
		return url;
	return url.slice(0, index) + 'crop/600/400' + url.slice(index);
}

export default getCroppedImageUrl;