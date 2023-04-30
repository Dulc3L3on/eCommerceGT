import './MyReport.css'

function MyReport(){
    return (
        <div id="report-container">
            <div id="report-div">
                <ReportViewer />    
                <ReportOptionFilters />
            </div>            
        </div>
    );
}

function ReportViewer(props){
    return (
        <div id="report-viewer-div">
                pdf-viewer/html [no decidido aún]
        </div>
    );
}

function ReportOptionFilters(props){
    return (
        <div id="report-options-div">
            <ReportDateOptions />
            <ReportReportsChoices />
        </div>
    );
}

function ReportDateOptions(){
    return (
        <div id="report-date-options">
            <div className="report-from-date-div id-1">
                <input type="date"
                       name="report-from"
                       className='report-input-date'/>
            </div>                    
            <div className="report-to-date-div id-2">
                <input type="date"
                       name="repot-to"
                       className='report-input-date'/>
            </div>                  
        </div>
    );
}

function ReportReportsChoices(){
    return (
        <div id="report-choices">
            <div id="report-choices-group-1">
                <div>
                    <button id="report-1" type="submit">Top 10 The most-sold products</button>
                </div>                
                <div>
                    <button id="report-2" type="submit">Top 10 The most-requester cx-</button>  
                </div>                
                <div>
                    <button id="report-3" type="submit">Top 10 The seller-lovers</button>  
                </div>
                
            </div>
            <div id="my-report-options-div">
                <ReportOptionsDiv id="first-report-option" report={'most-sold'}/>    
                <ReportOptionsDiv report={'most-requester'}/>    
                <ReportOptionsDiv report={'seller-lovers'}/>    
            </div>
            <div id="report-choices-group-2">                
                <div>
                    <button id="report-4" type="submit">Top 5 The biggest-buyers</button>
                </div>                
                <div>
                    <button id="report-5" type="submit">Top 5 The best-sellers cx</button>
                </div>                                 
            </div>    
            <div id="my-report-options-div">
                <ReportOptionsDiv report={'biggest-buyers'}/>    
                <ReportOptionsDiv report={'best-sellers'}/>   
            </div>
        </div>
    );
}
//I think the string are going to be replace for an object that has this document or maybe for a query that can get it or something like this... xD

function ReportOptionsDiv(props){    
    return (
        <div id="my-report-options">
            <div id="my-report-option-download" onClick={() => handleDownloading(props.report)}>
                <i class="bi bi-box-arrow-down"></i>
            </div>
            <div id="my-report-option-share" onClick={() => handleSending(props.report)}>
                <i class="bi bi-share-fill"></i>
            </div>
        </div>
    );    
}

function handleDownloading(report){

}

function handleSending(report){

}

export default MyReport;