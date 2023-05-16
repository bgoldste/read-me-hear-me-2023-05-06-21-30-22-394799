import guideData from "@/data/sc_data.json";
import reviewData from "@/data/review_data.json";
import siteData from "@/data/site_data.json";
import Link from "next/link";
const guides = guideData.posts;
const posts = reviewData.posts;
const combinedData = posts.concat(guides);



const NetworkFooter = () => {
    return (

            <div>
                <span className="footer-title">More Sites for You:</span>
                {siteData.site_network_data.map((g) => (
                    <Link key={g.url} href={g.url} className="link link-hover">
                        <span className="font-bold ">{g.name}  </span> -  {g.description.slice(0,250)}...
                    </Link>
                ))}
            </div>

    );
};
export default NetworkFooter;
