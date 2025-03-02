import ResultReport from "./ResultReport"

type BackendResponse<T> = {
  message: string
  data: {
    results:T,
    resultReport:ResultReport
  }
}

export default BackendResponse
