import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer CqaxPFQKh839ygQj6gZu7zNfNf-GM82I7aiQ8IIXRRH3QXiLyUw0DRFuWIyGnlFNpRqhGJupazYlg9SDaPJi1hj5tZ60pkXWXg6z16nT-xEeVD6wTYtIvJi3nlxKZHYx",
    Accept: "application/json",
  },
});

// Client ID
// kumDwqKYr3FtLNPIFIsB4A

// API Key
// CqaxPFQKh839ygQj6gZu7zNfNf-GM82I7aiQ8IIXRRH3QXiLyUw0DRFuWIyGnlFNpRqhGJupazYlg9SDaPJi1hj5tZ60pkXWXg6z16nT-xEeVD6wTYtIvJi3nlxKZHYx
