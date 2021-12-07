/*
 * ONE IDENTITY LLC. PROPRIETARY INFORMATION
 *
 * This software is confidential.  One Identity, LLC. or one of its affiliates or
 * subsidiaries, has supplied this software to you under terms of a
 * license agreement, nondisclosure agreement or both.
 *
 * You may not copy, disclose, or use this software except in accordance with
 * those terms.
 *
 *
 * Copyright 2021 One Identity LLC.
 * ALL RIGHTS RESERVED.
 *
 * ONE IDENTITY LLC. MAKES NO REPRESENTATIONS OR
 * WARRANTIES ABOUT THE SUITABILITY OF THE SOFTWARE,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT.  ONE IDENTITY LLC. SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
 * AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
 * THIS SOFTWARE OR ITS DERIVATIVES.
 *
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EuiCoreModule } from '@elemental-ui/core';
import { configureTestSuite } from 'ng-bullet';

import { ImxTranslationProviderService } from '../translation/imx-translation-provider.service';
import { DataTableDetailComponent } from './data-table-detail.component';
import { DataTableDetailHeaderComponent } from './data-table-detail-header.component';
import { clearStylesFromDOM } from '../testing/clear-styles.spec';

describe('DataTabelDetailComponent', () => {
  let component: DataTableDetailComponent;
  let fixture: ComponentFixture<DataTableDetailComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        EuiCoreModule,
        MatIconModule,
        NoopAnimationsModule
      ],
      declarations: [
        DataTableDetailComponent,
        DataTableDetailHeaderComponent
      ],
      providers: [
        {
          provide: ImxTranslationProviderService,
          useClass: class {}
        }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterAll(() => {
    clearStylesFromDOM();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});