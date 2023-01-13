import { LightningElement, track} from 'lwc';
import { fetchCustomLabels } from "devopsimpkg19/utility";
export default class testFetchCustomLabel extends LightningElement {

    labelName = [
            "VPLDayTimeTargetAllDays","VPLDayTimeTargetWeekends", "VPLDayTimeTargetWeekDays",
            "ASMGenericErrorMessage", "VPLDayTimeTargetSelectAll", "VPLDayTimeTargetClearAll",
            "sfiAdsIssueUnavailable", "sfiAdsIssueSelected", "sfiAdsIssueConsumed",
            "sfiAdsIssueDeadlineWarning", "sfiAdsIssueAlreadyConsumed",
            "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec",
            "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
        ];
    @track labelValue = [];
    @track labelBulk = [];
    @track em;
    connectedCallback () {
        this.labelName.forEach(label => {
            fetchCustomLabels([label]).then(customLabels => {
                this.labelValue.push(label + ' ==>  ' + customLabels[label]);
            }).catch(e => {
                this.em = e;
            });
        });

////
        fetchCustomLabels(this.labelName).then(customLabels => {
            this.labelBulk = Object.values(customLabels);
        }).catch(e => {
            this.em = e;
        });
    }
}