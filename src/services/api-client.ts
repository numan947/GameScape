import axios from "axios";
import { API_KEY } from "../env";

axios.create({
	params: {
		key:API_KEY
	}
});