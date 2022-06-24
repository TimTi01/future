export interface Response {
    kind:       string;
    totalItems: number;
    items: Item[];
}

export interface Item {
    kind:       string;
    id:         string;
    etag:       string;
    selfLink:   string;
    volumeInfo: VolumeInfo;
    saleInfo:   SaleInfo;
    accessInfo: AccessInfo;
}

export interface AccessInfo {
    country:                string;
    viewability:            string;
    embeddable:             boolean;
    publicDomain:           boolean;
    textToSpeechPermission: string;
    epub:                   Epub;
    pdf:                    Epub;
    webReaderLink:          string;
    accessViewStatus:       string;
    quoteSharingAllowed:    boolean;
}

export interface Epub {
    isAvailable:  boolean;
    downloadLink: string;
}

export interface SaleInfo {
    country:     string;
    saleability: string;
    isEbook:     boolean;
    buyLink:     string;
}

export interface VolumeInfo {
    title:               string;
    authors:             string[];
    categories:          string[];
    imageLinks:          ImageLinks;
    // publishedDate:       string;
    // industryIdentifiers: IndustryIdentifier[];
    // readingModes:        ReadingModes;
    // pageCount:           number;
    // printType:           string;
    // maturityRating:      string;
    // allowAnonLogging:    boolean;
    // contentVersion:      string;
    // panelizationSummary: PanelizationSummary;
    // language:            string;
    // previewLink:         string;
    // infoLink:            string;
    // canonicalVolumeLink: string;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail:      string;
}

export interface IndustryIdentifier {
    type:       string;
    identifier: string;
}

export interface PanelizationSummary {
    containsEpubBubbles:  boolean;
    containsImageBubbles: boolean;
}

export interface ReadingModes {
    text:  boolean;
    image: boolean;
}