import { MeanStackFileUploadPage } from './app.po';

describe('mean-stack-file-upload App', () => {
  let page: MeanStackFileUploadPage;

  beforeEach(() => {
    page = new MeanStackFileUploadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
